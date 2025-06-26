const fs = require('fs');
const path = require('path');

// Read the current properties.json file
const propertiesPath = path.join(__dirname, '../src/data/json/properties.json');
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));

// Default values to add to properties that don't have them
const defaultValues = {
  status: "Ready to Move",
  possession: "Immediate",
  floorPlan: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
  virtualTour: "https://www.youtube.com/embed/sM427iZRWGE",
  originalPrice: null
};

// Location-specific nearby places
const getNearbyPlaces = (location) => {
  const baseLocation = location.split(',')[0].trim();
  
  const locationMappings = {
    'DLF Phase 1': [
      { name: "Cyber Hub Metro", distance: "1.5 km", type: "Transport" },
      { name: "Ambience Mall", distance: "2.0 km", type: "Shopping" },
      { name: "Medanta Hospital", distance: "1.8 km", type: "Healthcare" },
      { name: "DPS Gurgaon", distance: "1.2 km", type: "Education" },
      { name: "Cyber City", distance: "3.5 km", type: "Business" }
    ],
    'Sector 62': [
      { name: "Noida City Centre Metro", distance: "0.8 km", type: "Transport" },
      { name: "DLF Mall of India", distance: "1.5 km", type: "Shopping" },
      { name: "Fortis Hospital", distance: "2.2 km", type: "Healthcare" },
      { name: "Delhi Public School", distance: "1.0 km", type: "Education" },
      { name: "Sector 62 IT Hub", distance: "0.5 km", type: "Business" }
    ],
    'Sector 21': [
      { name: "Faridabad Metro Station", distance: "2.5 km", type: "Transport" },
      { name: "Crown Plaza Mall", distance: "1.8 km", type: "Shopping" },
      { name: "Sarvodaya Hospital", distance: "1.5 km", type: "Healthcare" },
      { name: "Modern Public School", distance: "0.8 km", type: "Education" },
      { name: "BPTP Park", distance: "2.0 km", type: "Business" }
    ],
    'Greater Kailash': [
      { name: "Kailash Colony Metro", distance: "0.5 km", type: "Transport" },
      { name: "Select City Walk Mall", distance: "1.2 km", type: "Shopping" },
      { name: "Max Hospital", distance: "1.0 km", type: "Healthcare" },
      { name: "Modern School", distance: "0.8 km", type: "Education" },
      { name: "Nehru Place", distance: "2.5 km", type: "Business" }
    ],
    'Dwarka Sector 12': [
      { name: "Dwarka Metro Station", distance: "1.0 km", type: "Transport" },
      { name: "City Centre Mall", distance: "1.5 km", type: "Shopping" },
      { name: "Venkateshwar Hospital", distance: "2.0 km", type: "Healthcare" },
      { name: "Delhi Public School", distance: "0.5 km", type: "Education" },
      { name: "Dwarka Business District", distance: "2.5 km", type: "Business" }
    ]
  };

  return locationMappings[baseLocation] || [
    { name: "Metro Station", distance: "1.5 km", type: "Transport" },
    { name: "Shopping Mall", distance: "2.0 km", type: "Shopping" },
    { name: "Hospital", distance: "1.8 km", type: "Healthcare" },
    { name: "School", distance: "1.2 km", type: "Education" },
    { name: "Business District", distance: "3.5 km", type: "Business" }
  ];
};

// Update each property with missing fields
const updatedProperties = properties.map(property => {
  // Only add missing fields, don't override existing ones
  const updatedProperty = {
    ...property,
    ...defaultValues,
    ...property, // This ensures existing values are preserved
    
    // Add specific fields based on property type
    status: property.status || property.age || "Ready to Move",
    furnished: property.furnished || (property.type === "villa" ? "Semi-Furnished" : "Unfurnished"),
    plotArea: property.plotArea || (property.type === "villa" ? "250 sq yards" : "N/A"),
    rera: property.rera || `RERA${property.id}23456789`,
    
    // Add highlights if not present
    highlights: property.highlights || [
      `Prime location in ${property.location}`,
      "Vastu compliant design",
      "Premium fittings and fixtures",
      "24/7 power backup and security",
      "Excellent connectivity"
    ],
    
    // Add nearby places if not present
    nearbyPlaces: property.nearbyPlaces || getNearbyPlaces(property.location)
  };

  return updatedProperty;
});

// Write the updated properties back to the file
fs.writeFileSync(propertiesPath, JSON.stringify(updatedProperties, null, 2));

console.log('Properties updated successfully!');
console.log(`Updated ${updatedProperties.length} properties with missing fields.`);
