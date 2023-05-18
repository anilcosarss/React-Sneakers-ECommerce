import { createContext, useContext, useState } from "react";


const AppContext = createContext(null);


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("AppContext must be within appContextProvider!")
  }
  return context;
}



const AppContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

  // To add an item

  const addItem = (shoe) => {

    const checkBasket = basket.find(item => item.shoeId === shoe.id);

    if (checkBasket) {
      const updatedBasket = basket.map(item => {
        if (item.shoeId === shoe.id) {
          return {
            ...item,
            amount: item.amount + 1
          };
        } else {
          return item;
        }
      });
      setBasket(updatedBasket);
    } else {
      setBasket([
        ...basket,
        {
          shoeId: shoe.id,
          shoeTitle: shoe.title,
          shoeRetailPrice: shoe.retailPrice,
          shoeBrand: shoe.brand,
          imgUrl: shoe.media.thumbUrl,
          amount: 1
        }
      ]);
    }
  };


  const addItemFromBasket = (shoe) => {
    const updatedBasket = basket.map(item => {
      if (item.shoeId === shoe.shoeId) {
        return {
          ...item,
          amount: item.amount + 1
        };
      } else {
        return item;
      }
    });
  
    setBasket(updatedBasket);
  };




  // To delete an item

  const deleteItem = (shoe) => {
    const checkBasket = basket.find(item => item.shoeId === shoe.id);
    if (checkBasket) {
      if (checkBasket.amount === 1) {
        const updatedBasket = basket.filter(item => item.shoeId !== shoe.id);
        setBasket(updatedBasket);
      } else {
        const updatedBasket = basket.map(item => {
          if (item.shoeId === shoe.id) {
            return {
              ...item,
              amount: item.amount - 1
            };
          } else {
            return item;
          }
        });
        setBasket(updatedBasket);
      }
    }
  }

  // Delete item from basket 


  const deleteItemFromBasket = (shoe) => {

    const updatedBasket = basket.map(item => {
      if (item.shoeId === shoe.shoeId) {
        const updatedAmount = item.amount - 1;
        if (updatedAmount <= 0) {
          // Ürün miktarı 0 veya daha az ise sepetten kaldır
          return null;
        } else {
          return {
            ...item,
            amount: updatedAmount
          };
        }
      } else {
        return item;
      }
    }).filter(item => item !== null); // null olan öğeleri filtrele
  
    setBasket(updatedBasket);
  };


  // Remove Item 

  const clearItem = (shoe) => {
    const updatedBasket = basket.filter(item => item.shoeId !== shoe.shoeId);
    setBasket(updatedBasket);
  };
  return (
    <AppContext.Provider value={{ basket, addItem, deleteItem, addItemFromBasket,deleteItemFromBasket,clearItem,setBasket}} >{children}</AppContext.Provider>
  )

}

export default AppContextProvider;