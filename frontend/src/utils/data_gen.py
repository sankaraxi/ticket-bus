import json
import random
from faker import Faker
from datetime import datetime, timedelta

fake = Faker()
data = []

bus_names = ["City Express", "Morning Star", "Sunset Journey", "Blue Horizon", "Coastal Cruiser","Mountain Express","Desert Runner","Midnight Express","Golden Gate","Northern Lights"]
destinations = ["Trichy", "Chennai", "Madurai", "Erode", "Salem", "Palani", "Cochin", "Wayanad", "Hosur", "Sivagangai"]
seat_preferences = ["Window", "Aisle", "No Preference"]

for i in range(100):
    month = random.randint(1, 12)
    day = random.randint(1, 28)  # Avoiding leap year complications
    date = datetime(2024, month, day).isoformat() + "Z"
    data.append({
        "userName": fake.first_name(),
        "busName": random.choice(bus_names),
        "busId": fake.uuid4(),
        "date": date,
        "price": random.randint(2000, 8000),
        "seat": random.randint(1, 50),
        "destination": random.choice(destinations),
        "departureTime": f"{random.randint(1, 12)}:{random.choice(['00', '30'])} {random.choice(['AM', 'PM'])}",
        "arrivalTime": f"{random.randint(1, 12)}:{random.choice(['00', '30'])} {random.choice(['AM', 'PM'])}",
        "seatPreference": random.choice(seat_preferences),
    })

# Save to JSON
with open("booking_data.json", "w") as f:
    json.dump(data, f, indent=2)
