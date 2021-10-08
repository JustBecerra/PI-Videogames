import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getGenres} from '../actions/getGenres'
export default function Checkboxes(){
  const [values,setValues] = useState({})
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch()
  let generos = useSelector(state => state.genres)
  
  useEffect(() => {
    (async () => {
      dispatch(await getGenres())
    })()
  },[])
  
  let handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.checked });
  const checkFunc = () => {
      
  }
  const renderedOptions = generos.map((g) => {
    return (
        <div key={g.name}>
            <label>
                <input
                    checked={values ? true : false}
                    type="checkbox"
                    name={g.name}
                    value={g.name}
                    onChange={(e) => {
                        handleChange(e);
                    }}></input>
                {g.name}
            </label>
        </div>
    );
});

  return(
    <div>
      {renderedOptions}
    </div>
    )
}