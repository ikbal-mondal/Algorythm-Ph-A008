import React from 'react';

const Installation = () => {
    return (
        <div>
            <h1>Installation Instructions</h1>
            <p>To install the application, follow these steps:</p>
            <ol>
                <li>Clone the repository: <code>git clone https://github.com/your-repo.git</code></li>
                <li>Navigate to the project directory: <code>cd your-repo</code></li>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Start the development server: <code>npm run dev</code></li>
            </ol>
        </div>
    );
};

export default Installation;