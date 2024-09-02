Yebente/
│
├── client/                     # Frontend code
│   ├── public/                 # Public files accessible by the client
│   │   ├── index.html          # Main entry HTML file
│   │   ├── favicon.ico         # Favicon
│   │   └── images/             # Images used in the app
│   │       ├── farm-raised-chicken.jpg
│   │       └── free-range-farm-eggs.jpg
│   │
│   ├── src/                    # Source files for React
│   │   ├── components/         # Reusable components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── ProductCard.js
│   │   │   ├── PaymentButton.js
│   │   │   ├── CheckoutButton.js
│   │   │   └── ...             # Additional components
│   │   │
│   │   ├── containers/         # Main container components
│   │   │   ├── App.js
│   │   │   ├── ProductList.js
│   │   │   ├── ProductDetail.js
│   │   │   └── ...             # Additional containers
│   │   │
│   │   ├── pages/              # React pages corresponding to routes
│   │   │   ├── Home.js
│   │   │   ├── ShopPage.js
│   │   │   ├── SellPage.js
│   │   │   ├── ProductDetailsPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── SignupPage.js
│   │   │   ├── CartPage.js
│   │   │   └── CheckoutPage.js
│   │   │
│   │   ├── actions/            # Redux actions for state management
│   │   │   ├── productActions.js
│   │   │   ├── cartActions.js
│   │   │   └── userActions.js
│   │   │
│   │   ├── reducers/           # Redux reducers for state management
│   │   │   ├── productReducer.js
│   │   │   ├── cartReducer.js
│   │   │   └── userReducer.js
│   │   │
│   │   ├── store/              # Redux store configuration
│   │   │   └── store.js
│   │   │
│   │   ├── styles/             # CSS and styling
│   │   │   ├── global.css
│   │   │   └── components/     # Component-specific styles
│   │   │       ├── Header.css
│   │   │       └── ...
│   │   │
│   │   ├── utils/              # Utility functions
│   │   │   ├── api.js          # API calls configuration
│   │   │   ├── constants.js    # Constant values used in the app
│   │   │   └── mpesa.js        # M-Pesa payment integration
│   │   │
│   │   └── index.js            # Entry point for React
│   │
│   ├── package.json            # Package manager dependencies
│   └── package-lock.json
│
├── server/                     # Backend code
│   ├── app/
│   │   ├── __init__.py         # Flask app initialization
│   │   ├── routes.py           # Application routes
│   │   ├── models.py           # Database models
│   │   ├── schemas.py          # Validation schemas
│   │   └── utils.py            # Helper functions
│   │
│   ├── config/
│   │   ├── config.py           # Configuration settings
│   │   └── database.py         # Database connection setup
│   │
│   ├── controllers/            # Controllers for handling business logic
│   │   ├── paymentController.js # Payment handling logic
│   │   ├── userController.js    # User management logic
│   │   └── productController.js # Product management logic
│   │
│   ├── routes/                 # Express routes
│   │   ├── paymentRoutes.js    # Payment routes
│   │   ├── userRoutes.js       # User routes
│   │   └── productRoutes.js    # Product routes
│   │
│   ├── middleware/             # Middleware functions
│   │   ├── authMiddleware.js   # Authentication middleware
│   │   └── errorMiddleware.js  # Error handling middleware
│   │
│   ├── utils/                  # Server-side utilities
│   │   ├── mpesaUtils.js       # M-Pesa utility functions
│   │   └── helpers.js          # General utility functions
│   │
│   ├── server.js               # Main server entry point
│   ├── wsgi.py                 # WSGI entry point for deployment
│   ├── requirements.txt        # Python dependencies
│   └── venv/                   # Python virtual environment
│
├── db/                         # Database management
│   ├── seed.js                 # Script for seeding initial data
│   ├── migrations/             # Database migration files
│   │   └── 20230830_initialMigration.js
│   └── mariadb/                # MariaDB-specific files
│       ├── db.sql              # Database schema
│       └── data.sql            # Seed data
│
├── shared/                     # Shared files between frontend and backend
│   ├── constants.js            # Shared constants
│   └── utils.js                # Shared utility functions
│
├── static/                     # Static files
│   ├── images/                 # Image assets
│   │   ├── eggs.jpg
│   │   ├── egoo.jpg
│   │   ├── farm-raised-chicken.jpg
│   │   └── free-range-farm-eggs.jpg
│   ├── script.js               # Additional JavaScript files
│   └── styles.css              # Additional CSS files
│
├── templates/                  # HTML Templates (for server-side rendering)
│   ├── cart.html
│   ├── index.html
│   ├── login.html
│   ├── resset.html
│   └── signup.html
│
├── instance/                   # Instance-specific configuration files
│   └── [instance-specific files]
│
├── .env                        # Environment configuration file
├── README.md                   # Documentation
├── package.json                # Backend package dependencies
├── package-lock.json           # Lock file for backend dependencies
├── node_modules/               # Node.js dependencies
├── .gitignore                  # Specifies files to be ignored by Git
└── run.py                      # Entry point to run the Flask app
