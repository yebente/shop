<?php
include 'db_connect.php';
session_start();

// Ensure the user is an admin
if (!$_SESSION['is_admin']) {
    die("Unauthorized access.");
}

// Fetch users
$users = $conn->query("SELECT * FROM users");
$orders = $conn->query("SELECT * FROM orders");
$products = $conn->query("SELECT * FROM products");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Admin Dashboard</h1>
    <section>
        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php while($user = $users->fetch_assoc()) { ?>
                <tr>
                    <td><?php echo $user['id']; ?></td>
                    <td><?php echo $user['name']; ?></td>
                    <td><?php echo $user['email']; ?></td>
                    <td>
                        <a href="delete_user.php?id=<?php echo $user['id']; ?>">Delete</a>
                    </td>
                </tr>
                <?php } ?>
            </tbody>
        </table>
    </section>
    
    <section>
        <h2>Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Total</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php while($order = $orders->fetch_assoc()) { ?>
                <tr>
                    <td><?php echo $order['id']; ?></td>
                    <td><?php echo $order['user_id']; ?></td>
                    <td><?php echo $order['total']; ?></td>
                    <td><?php echo $order['created_at']; ?></td>
                </tr>
                <?php } ?>
            </tbody>
        </table>
    </section>
</body>
</html>
