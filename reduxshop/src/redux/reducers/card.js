export const cardReducer = (state = { cardItems: [] }, action) => {
    switch (action.type) {
      case "ADD_CARD":
            const item = action.payload;
            const existItem = state.cardItems.find(x=>x.id === item.payload);  
            //aynı üründen birkaç tane daha eklemek istersek
            if(existItem){
                return{
                    ...state,
                    cardItems:state.cardItems.map(x=>x.id === existItem.payload ? item : x)

                }
            }
            //farklı bir ürün eklendiyse
            else{
                return{
                    ...state,
                    //tüm stateleri dön yeni gelen ürünü(item) ekle.
                    cardItems :[...state.cardItems,item]
                }
            }

        case "REMOVE_CARD":
          return {
            cardItems : state.cardItems.filter(x => x.id!== action.payload)   
          }
  
       default:
         return state;
    }
  };
  