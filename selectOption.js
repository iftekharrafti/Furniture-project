import React from 'react';

const selectOption = () => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
  
    const handleColorChange = (event) => {
      setSize(event.target.value);
    };
  
    const handleSizeChange = (event) => {
      setColor(event.target.value);
    };
    return (
        <div>
            {/* Color Option */}

            <Box className={styles.color}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Color
                </InputLabel>
                <FormControl sx={{ minWidth: 400 }}>
                  <Select
                    value={color}
                    onChange={handleColorChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">Gray</MenuItem>
                    <MenuItem value={10}>Green</MenuItem>
                    <MenuItem value={11}>Chocolet</MenuItem>
                    <MenuItem value={12}>Blue</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Select Size */}

              <Box sx={{ my: 2 }} className={styles.size}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Size
                </InputLabel>
                <FormControl sx={{ minWidth: 400 }}>
                  <Select
                    value={size}
                    onChange={handleSizeChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">Semi Double</MenuItem>
                    <MenuItem value={10}>Double</MenuItem>
                    <MenuItem value={11}>Single</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Select Material */}

              <Box className={styles.material}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Material
                </InputLabel>
                <FormControl sx={{ minWidth: 400 }}>
                  <Select
                    value={size}
                    onChange={handleSizeChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">Wood</MenuItem>
                    <MenuItem value={10}>Metal</MenuItem>
                    <MenuItem value={11}>Leather</MenuItem>
                  </Select>
                </FormControl>
              </Box>
        </div>
    );
};

export default selectOption;