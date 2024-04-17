import { useContext, useEffect, useState } from 'react';
import './PopUpEdit.css';
import { assets } from '../../assets/assets';
import { contextS } from '../../context/StoreContext';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const PopUpEdit = ({ setHide }) => {
  const { setprice, setdesc, setName, setImage, setcatego, image, catego, name, price, desc, row } = useContext(contextS);
  const [nm, setNm] = useState('');
  const [img, setImg] = useState('');
  const [dec, setDec] = useState('');
  const [pr, setPr] = useState('');
  const [cat, setCat] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:3000/food_list/${row}`)
      .then(res => {
        setNm(res.data.name);
        setDec(res.data.description);
        setCat(res.data.category);
        setPr(res.data.price);
        setImg(res.data.image);
      });
  }, []);


  const handleSubmit = () => {
    axios.put(`http://localhost:3000/food_list/${parseInt(row)}`, {
      id: parseInt(row),
      image: img,
      category: cat,
      name: nm,
      price: pr,
      description: dec,
    })
    .then((response) => {
      console.log(response);
      location.reload();
    });
    setHide(false);
  };

  return (
    <div className="PopUp">
      <div className="infos">
        <div className="top">
          <h2>Edit</h2>
          <img onClick={() => setHide(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="elemnts">
          <div className="elem">
            <label htmlFor="image">Image: </label>
            <input value={img} onChange={(e) => {
              setImg(e.target.value);
              } 
            }
              type="text" id="image" placeholder='Enter Image url' />
          </div>
          <div className="elem">
            <label htmlFor="Description">Description: </label>
            <input value={dec} onChange={(e) => {
                setDec(e.target.value);
              } 
            }
              type="text" id="Description" placeholder='Enter Description' />
          </div>
          <div className="elem">
            <label htmlFor="Name">Name: </label>
            <input value={nm} onChange={(e) => {
              setNm(e.target.value)} 
            }
              type="text" id="Name" placeholder='Enter Name' />
          </div>
          <div className="elem">
            <label htmlFor="Price">Price: </label>
            <input value={pr} onChange={(e) => setPr(e.target.value)} type="text" id="Price" placeholder='Enter Price' />
          </div>
          <div className="elem">
            <label htmlFor="Category">Category: </label>
            <input value={cat} onChange={(e) => setCat(e.target.value)} type="text" id="Category" placeholder='Enter Category' />
          </div>
          <div className="button">
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpEdit;
