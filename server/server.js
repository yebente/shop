// server/server.js

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Function to get the OAuth token from Safaricom
async function getOAuthToken() {
    const auth = Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64');
    try {
        const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: { Authorization: `Basic ${auth}` },
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting OAuth token:', error);
        throw new Error('Failed to get OAuth token');
    }
}

// Function to initiate the STK Push
async function initiateSTKPush(phoneNumber, amount) {
    const token = await getOAuthToken();
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14); // YYYYMMDDHHmmss format
    const password = Buffer.from(`${process.env.SHORTCODE}${process.env.PASSKEY}${timestamp}`).toString('base64');

    const request = {
        BusinessShortCode: process.env.SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: 'https://yourdomain.com/api/mpesa/callback', // Replace with your callback URL
        AccountReference: 'YebenteShop',
        TransactionDesc: 'Payment for goods'
    };

    try {
        const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', request, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error initiating STK Push:', error);
        throw new Error('Failed to initiate payment');
    }
}

// Route to handle the payment request
app.post('/api/mpesa/pay', async (req, res) => {
    const { phoneNumber, amount } = req.body;
    try {
        const response = await initiateSTKPush(phoneNumber, amount);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
