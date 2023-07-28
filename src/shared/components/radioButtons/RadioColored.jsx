import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const RadioColored = () => {
  return (
    <form>
      <FormLabel
        id="label-changer"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '12px',
          letterSpacing: '-0.24px',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.50);',
        }}
      >
        Label color
      </FormLabel>
      <RadioGroup
        aria-labelledby="label-changer"
        defaultValue="gray"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="blue" control={<Radio />} />
        <FormControlLabel value="pink" control={<Radio />} />
        <FormControlLabel value="green" control={<Radio />} />
        <FormControlLabel
          value="gray"
          control={
            <Radio
              sx={{
                color: '#111',
                width: '14px',
                height: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.30);',
              }}
            />
          }
        />
      </RadioGroup>
    </form>
  );
};

export default RadioColored;
