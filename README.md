# Sorting Algorithm Visualizer

A full-stack web application that visualizes sorting algorithms in real-time. Watch as different sorting algorithms organize arrays and understand their step-by-step processes through interactive animations and detailed information.

## 🎯 Project Overview

The Sorting Algorithm Visualizer helps users learn and understand how different sorting algorithms work by providing:

- **Interactive Visualizations**: Real-time animated visualization of sorting algorithms using chart animations
- **Algorithm Selection**: Choose from multiple sorting algorithms to visualize
- **Customizable Input**: Adjust array size and test different scenarios
- **Step-by-Step Execution**: Control the speed and manually step through the sorting process
- **User Authentication**: Secure login with Supabase authentication
- **History Tracking**: Keep track of your sorting visualizations

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.6** - React framework with server-side rendering
- **React 19.2.3** - UI library
- **Recharts 3.8.1** - Chart library for algorithm visualization
- **Supabase** - Authentication and backend services

### Backend
- **Python 3.x** - Server-side language
- **Flask 3.1.2** - Web framework for API endpoints
- **Flask-CORS** - Cross-origin resource sharing support

## 📦 Prerequisites

Before you begin, check if you have the required tools installed:

### Check Your System

```bash
# Check Node.js version (v16 or higher required)
node --version
npm --version

# Check Python version (3.8 or higher required)
python3 --version

# Check pip
pip3 --version
```

If any of these are missing or below the required versions, install them:

- **Node.js & npm**: Download from [nodejs.org](https://nodejs.org/)
- **Python 3.8+**: Download from [python.org](https://www.python.org/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Sorting-Algorithm-Visualizer.git
cd Sorting-Algorithm-Visualizer
```

### 2. Backend Setup

Navigate to the server directory and set up the Python environment:

```bash
cd server

# Check if virtual environment already exists
ls -la | grep venv

# If venv doesn't exist, create one:
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Check what's already installed
pip list

# Install dependencies (only missing ones will be added)
pip install -r requirements.txt
```

### 3. Frontend Setup

Navigate to the client directory and install dependencies:

```bash
cd ../client

# Check if node_modules already exists
ls -la | grep node_modules

# Check what's currently installed (if node_modules exists)
npm list --depth=0

# Install npm dependencies (skips already installed packages)
npm install
```

## 💻 Running the Application

### Starting the Backend Server

From the `server` directory (with virtual environment activated):

```bash
python run.py
```

The backend server will start on `http://localhost:5000`

### Starting the Frontend Development Server

From the `client` directory:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

**Both the frontend and backend servers must be running for the application to function properly.**

## 📁 Project Structure

```
Sorting-Algorithm-Visualizer/
├── client/                          # Next.js frontend application
│   ├── components/
│   │   ├── chart/                  # Visualization components
│   │   ├── description/            # Algorithm information display
│   │   ├── Login/                  # Authentication components
│   │   └── server/                 # Main app UI components
│   ├── public/                     # Static assets
│   ├── src/app/                    # Next.js app directory
│   ├── package.json                # Frontend dependencies
│   └── next.config.mjs             # Next.js configuration
│
├── server/                         # Python Flask backend
│   ├── app/
│   │   ├── routes/                 # API endpoints
│   │   │   ├── algorithmAPI.py    # Algorithm visualization endpoints
│   │   │   └── users.py            # User authentication endpoints
│   │   └── __init__.py             # Flask app initialization
│   ├── logic/                      # Core algorithm logic
│   │   ├── algorithms.py           # Sorting algorithm implementations
│   │   └── arrayGenerator.py       # Array generation utilities
│   ├── requirements.txt            # Python dependencies
│   └── run.py                      # Server entry point
│
├── Test cases/                     # Test suite
│   └── test.py                     # Testing utilities
│
└── README.md                       # Project documentation
```

## 🎮 Features

### Algorithm Visualization
- Visualize multiple sorting algorithms
- Real-time animation of the sorting process
- Detailed step-by-step breakdowns

### Interactive Controls
- **Algorithm Selection**: Choose different sorting algorithms to compare
- **Input Size**: Set custom array sizes (from small to large datasets)
- **Test Cases**: Different test scenarios (best case, average case, worst case)
- **Step Controls**: Play, pause, and manually step through the sorting process

### User Features
- Secure login with authentication
- View sorting history
- Customize visualization preferences

## 🔌 API Endpoints

### Backend API Routes

**Algorithm Endpoints** (`/api/algorithm`)
- GET endpoints for sorting algorithm data and step-by-step execution
- POST endpoints for custom array sorting

**User Endpoints** (`/api/users`)
- POST for user registration
- POST for user login/authentication

## 🧪 Testing

Run tests using the provided test suite:

```bash
cd Test\ cases
python test.py
```

## 📝 Environment Variables

Create a `.env.local` file in the `client` directory for Supabase configuration:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🐛 Troubleshooting

### Port Already in Use
- If port 3000 or 5000 is already in use, you can change the port in:
  - Frontend: `npm run dev -- -p 3001`
  - Backend: Modify `run.py` to use a different port

### Dependencies Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- For Python, try reinstalling: `pip install --upgrade -r requirements.txt`

### CORS Errors
- Ensure Flask-CORS is installed: `pip install flask-cors`
- Check that the backend is running before making API requests

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Recharts Documentation](https://recharts.org/)

## 📄 License

This project is licensed under the LICENSE file in the root directory.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or new features!

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Happy Learning! 🎓**
