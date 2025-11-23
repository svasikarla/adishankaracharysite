
import numpy as np

# Data: [Longitude, SVG_X]
data_x = np.array([
    [76.576, 274.8], # J&K
    [77.615, 344.9], # Ladakh
    [78.657, 379.6], # TN
    [71.192, 199.2], # Gujarat
    [94.280, 826.3], # Arunachal
    [77.948, 378.4]  # MP
])

# Data: [Latitude, SVG_Y]
data_y = np.array([
    [33.778, 156.1], # J&K
    [34.210, 136.5], # Ladakh
    [11.127, 835.6], # TN
    [22.259, 481.0], # Gujarat
    [28.010, 325.9], # Arunachal
    [23.473, 494.2]  # MP
])

# Linear Regression for X
# x_svg = m_x * lng + c_x
A_x = np.vstack([data_x[:,0], np.ones(len(data_x))]).T
m_x, c_x = np.linalg.lstsq(A_x, data_x[:,1], rcond=None)[0]

# Linear Regression for Y
# y_svg = m_y * lat + c_y
A_y = np.vstack([data_y[:,0], np.ones(len(data_y))]).T
m_y, c_y = np.linalg.lstsq(A_y, data_y[:,1], rcond=None)[0]

print(f"X Coefficients: m_x={m_x}, c_x={c_x}")
print(f"Y Coefficients: m_y={m_y}, c_y={c_y}")

# Verify errors
print("\nX Errors:")
for lng, x_actual in data_x:
    x_pred = m_x * lng + c_x
    print(f"Lng: {lng}, Actual X: {x_actual}, Pred X: {x_pred:.2f}, Diff: {x_pred - x_actual:.2f}")

print("\nY Errors:")
for lat, y_actual in data_y:
    y_pred = m_y * lat + c_y
    print(f"Lat: {lat}, Actual Y: {y_actual}, Pred Y: {y_pred:.2f}, Diff: {y_pred - y_actual:.2f}")
