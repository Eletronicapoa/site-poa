#!/bin/bash

# Dropdown gaveta
sed -i 's/color: #333;/color: var(--text-dark);/g' style.css
sed -i 's/background-color: #f0f0f0;/background-color: var(--bg-light);/g' style.css
sed -i 's/color: #1e88e5;/color: var(--primary);/g' style.css

# Hero title
sed -i 's/color: #0b5d9c;/color: var(--primary-dark);/g' style.css

# Hero highlight
sed -i 's/background: linear-gradient(90deg, #00c853, #1e88e5);/background: linear-gradient(90deg, var(--accent), var(--primary));/g' style.css

# Ptext
sed -i 's/color: #666;/color: var(--text-medium);/g' style.css

# Links and buttons borders
sed -i 's/border: 1px solid #007bff;/border: 1px solid var(--primary);/g' style.css

# Timeline gradient
sed -i 's/background-image: linear-gradient(180deg, #0065a8, #00101b);/background-image: linear-gradient(180deg, var(--bg-gradient-start), var(--bg-gradient-end));/g' style.css

# Timeline background
sed -i 's/background-color: #f5f7ff;/background-color: var(--bg-light);/g' style.css

# Footer
sed -i 's/background-color: #0152a8;/background-color: var(--primary-dark);/g' style.css

# Devolta button
sed -i 's/background-color: #005995;/background-color: var(--primary-darker);/g' style.css
sed -i 's/background-color: #004b7d;/background-color: var(--primary-dark);/g' style.css

# Member cards borders
sed -i 's/border-left: 4px solid #1e88e5;/border-left: 4px solid var(--primary);/g' style.css
sed -i 's/border-left: 3px solid #1e88e5;/border-left: 3px solid var(--primary);/g' style.css

# Gradients
sed -i 's/background: linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%);/background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);/g' style.css
sed -i 's/background: linear-gradient(135deg, #1e88e5, #42a5f5);/background: linear-gradient(135deg, var(--primary), var(--secondary));/g' style.css

# Buttons hover
sed -i 's/background-color: #007bff;/background-color: var(--primary);/g' style.css

# Category title
sed -i 's/color: #1e88e5;/color: var(--primary);/g' style.css

echo "Refactoring completed!"
