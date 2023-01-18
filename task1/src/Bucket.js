import React, { useState } from 'react';

const Bucket = () => {
    const [bucket1, setBacket1] = useState(['Element1', 'Element2', 'Element3', 'Element4']);
    const [bucket2, setBacket2] = useState(['Element5', 'Element6', 'Element7', 'Element8']);
    const [selected, setSelected] = useState([]);

    const handleAdd = () => {
        if (selected.some(data => bucket1.includes(data))) {
            setBacket2([...bucket2, ...selected]);
            setBacket1(bucket1.filter((data) => !selected.includes(data)));
        } else if (selected.some(data => bucket2.includes(data))) {
            setBacket1([...bucket1, ...selected]);
            setBacket2(bucket2.filter((data) => !selected.includes(data)));
        }
        setSelected([]);
    };


    const handleRemove = () => {
        if (selected.some(data => bucket1.includes(data))) {
            setBacket1(bucket1.filter((data) => !selected.includes(data)));
        } else if (selected.some(data => bucket2.includes(data))) {
            setBacket2(bucket2.filter((data) => !selected.includes(data)));
        }
        setSelected([]);
    };

    const handleRemoveAll = () => {
        if (bucket1.length > 0 && bucket2.length > 0 ) {
          setBacket1([]);
          setBacket2([]);
        }else if (bucket1.length > 0 ) {
          setBacket1([]);
        }else if (bucket2.length > 0) {
          setBacket2([]);
        }
        setSelected([]);
      };
    

    const handleAddAll = () => {
        if (bucket1.length > 0) {
            setBacket2([...bucket2, ...bucket1]);
            setBacket1([]);
        } else if (bucket2.length > 0) {
            setBacket1([...bucket1, ...bucket2]);
            setBacket2([]);
        }
        setSelected([]);
    };

    const handleReset = () => {
        setBacket1(['Element1', 'Element2', 'Element3', 'Element4']);
        setBacket2(['Element5', 'Element6', 'Element7', 'Element8']);
        setSelected([]);
    }


    const handleSelect = (data) => {
        if (selected.includes(data)) {
            setSelected(selected.filter(elem => elem !== data))
        } else {
            setSelected([...selected, data]);
        }
    };

    return (
        <>
            <div className="container">
                <div className="bucket1">
                    <h2>Bucket 1</h2>
                    {bucket1.map((data) => (
                        <button className={`element ${selected.includes(data) ? 'selected' : ''}`} onClick={() => handleSelect(data)}>
                            {data}
                        </button>
                    ))}
                </div>
                <div className="button-click">
                    <button className="button-clicks" onClick={handleReset}>
                        Reset
                    </button>

                    <button className="button-clicks" onClick={handleAdd}>
                        Add
                    </button>
                    <button className="button-clicks" onClick={handleRemove}>
                        Remove
                    </button>
                    <button className="button-clicks" onClick={handleAddAll}>
                        Add All
                    </button>
                    <button className="button-clicks" onClick={handleRemoveAll}>
                        Remove All
                    </button>
                </div>
                <div className="bucket2">
                    <h2>Bucket 2</h2>
                    {bucket2.map((data) => (
                        <button className={`element ${selected.includes(data) ? 'selected' : ''}`} onClick={() => handleSelect(data)}>
                            {data}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Bucket;
