import GearItemCard from "./components/GearItemCard";
import VendorCard from "./components/VendorCard";

function App() {
  const shopInventory = [
  { 
    id: "g1", 
    name: "Neural Link Processor", 
    category: "Cyberware", 
    description: "Boosts reaction time and memory bandwidth.", 
    basePrice: 1200 
  },
  { 
    id: "g2", 
    name: "Thermal Katana", 
    category: "Weapons", 
    description: "Plasma-heated blade for cutting armor.", 
    basePrice: 850 
  },
  { 
    id: "g3", 
    name: "Optical Camo Cloak", 
    category: "Apparel", 
    description: "Renders user semi-invisible to security sensors.", 
    basePrice: 2100 
  }
];

  return (
    <div>
      <h1>Cyberpunk Gear Shop</h1>
      <VendorCard vendorName = "Viktor Jagger" location = "Northside District 7"/>

      {
      shopInventory.map((item) => (
        <GearItemCard
          key={item.id}
          name={item.name}
          category={item.category}
          description={item.description}
          basePrice={item.basePrice}
        />
      ))
      }

    </div>
  );
}

export default App
