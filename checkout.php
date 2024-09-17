<?php
include 'db_connect.php';
session_start();

if (isset($_POST['checkout'])) {
    $user_id = $_SESSION['user_id'];
    $cart = json_decode($_POST['cart'], true);
    $total = $_POST['total'];

    // Insert order into the database
    $sql = "INSERT INTO orders (user_id, total) VALUES ('$user_id', '$total')";
    if ($conn->query($sql) === TRUE) {
        $order_id = $conn->insert_id;

        // Insert each item in the order_items table
        foreach ($cart as $item) {
            $product_id = $item['product_id'];
            $quantity = $item['quantity'];
            $price = $item['price'];
            $conn->query("INSERT INTO order_items (order_id, product_id, quantity, price) 
                          VALUES ('$order_id', '$product_id', '$quantity', '$price')");
        }
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
