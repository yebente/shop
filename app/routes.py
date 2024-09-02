from flask import render_template, url_for, flash, redirect, request, jsonify
from app import app, db, bcrypt
from app.models import User, Product, Order
from flask_login import login_user, current_user, logout_user, login_required

@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = [{"id": p.id, "name": p.name, "price": p.price, "image": p.image} for p in products]
    return jsonify(product_list)

@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    user_id = current_user.id if current_user.is_authenticated else None
    order = Order(user_id=user_id, items=str(data['items']), total_price=data['total'])
    db.session.add(order)
    db.session.commit()
    return jsonify({"message": "Order placed successfully!"})

@app.route('/admin', methods=['GET'])
@login_required
def admin_dashboard():
    if not current_user.is_admin:
        return redirect(url_for('index'))
    orders = Order.query.all()
    return render_template('admin.html', orders=orders)
