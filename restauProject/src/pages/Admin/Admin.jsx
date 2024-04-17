import { DataGrid } from '@mui/x-data-grid';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import PopUpEdit from '../../components/AdminPopupEdit/PopUpEdit';
import './Admin.css'
import { contextS } from '../../context/StoreContext';
import Add from '../../components/Add_Popup/Add';



const Admin = () => {  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value} alt="Food" style={{ width: 40, height: 40, borderRadius:'50%' }} /> },
    { field: 'Description', headerName: 'Description', width: 130 },
    { field: 'name', headerName: 'Name', width: 90 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    { field: 'category', headerName: 'Category', type: 'string', width: 90 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 90,
      renderCell: (params) => (
        <IconButton>
          <button onClick={() => handleEdit(params.row.id)} style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><EditIcon style={{ color: 'blue' }} /></button>
        </IconButton>
      )
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 90,
      renderCell: (params) => (
        <IconButton>
          <button onClick={() => handleDelete(params.row.id)}  style={{backgroundColor:'transparent', border:'none',cursor:'pointer' }}><DeleteIcon style={{ color: 'red' }} /></button>
        </IconButton>
      )
    }
  ];
  const [hide2,setHide2] = useState(false);
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/food_list/${id}`)
    .then(res => {
      location.reload()
    })
  }

  const handleEdit = (rowData) => {
     setrow(rowData)
    setHide(true)
  }

  const [udata, setdata] = useState([]);
  const {hide,setHide,setrow} = useContext(contextS);

  useEffect(() => {
    axios.get('http://localhost:3000/food_list')
      .then(res => {
        // Assuming the images are stored in the public directory
        const modifiedData = res.data.map(item => ({
          id: item.id,
          name: item.name,
          image: item.image, // Update the path accordingly
          Description: item.description,
          price: `$${item.price}`,
          category:item.category,
        }));
        setdata(modifiedData);
      })
      .catch(error => {
        console.error('Error fetching food data:', error);
      });
  }, []);


  return (
    <>
    {hide? <PopUpEdit setHide={setHide}/>:''}
    {hide2? <Add setHide2={setHide2} />:'' }

    <div className='admin'>
      <Button onClick={()=>setHide2(true)} variant="contained" color="primary" style={{ marginBottom: '20px', marginTop:'10px', }}>Add Record</Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={udata}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onRowClick={(params) => console.log('Row clicked:', params.row.id)}
        />
      </div>
    </div>
    </>
  
  );
}

export default Admin;
