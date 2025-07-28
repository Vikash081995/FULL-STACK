aliens_0={'x_position':0, 'y_position':25, 'speed':'medium'}
print(f"Original position:{aliens_0['x_position']}")

if aliens_0['speed'] == 'medium':
    x_increment = 1
elif aliens_0['speed'] == 'fast':
    x_increment = 2
elif aliens_0['speed'] == 'slow':
    x_increment = 0.5


aliens_0['x_position'] += x_increment
print(f"New position:{aliens_0['x_position']}")