import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { LabelStyled } from './RadioFilters.styled';

const RadioFilters = ({ onFilterChange, onModalClose }) => {
  const radioButtons = [
    {
      value: 'none',
      label: 'Without priority',
      labelColor: 'var(--datepicker-dayname-color)',
      radioColor: {
        static: 'var(--radio-label-grey-color)',
        onChecked: 'var(--radio-label-checked-background-color)',
      },
    },
    {
      value: 'low',
      label: 'Low',
      labelColor: 'var(--radio-label-background-color)',
      radioColor: {
        static: 'var(--radio-label-background-color)',
        onChecked: 'var(--radio-label-checked-background-color)',
      },
    },
    {
      value: 'medium',
      label: 'Medium',
      labelColor: 'var(--radio-label-pink-color)',
      radioColor: {
        static: 'var(--radio-label-pink-color)',
        onChecked: 'var(--radio-label-checked-background-color)',
      },
    },
    {
      value: 'high',
      label: 'High',
      labelColor: 'var(--radio-label-green-color)',
      radioColor: {
        static: 'var(--radio-label-green-color)',
        onChecked: 'var(--radio-label-checked-background-color)',
      },
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '120px',
      }}
    >
      <RadioGroup
        aria-labelledby="label-changer"
        defaultValue="all"
        name="radio-buttons-group"
        onChange={ev => {
          onFilterChange(ev.target.value);
          setTimeout(() => {
            onModalClose();
          }, 150);
          
        }}
        sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
      >
        <FormControlLabel
          value="all"
          control={<Radio sx={{ display: 'none' }} />}
          label={<LabelStyled>Show all</LabelStyled>}
        />
        {radioButtons.map(button => {
          const { value, label, labelColor, radioColor } = button;
          return (
            <FormControlLabel
              key={value}
              value={value}
              sx={{
                display: 'flex',
                gap: '8px',
                margin: '0',
                height: '24px',
                '& .MuiTypography-root': {
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  letterSpacing: '-0.24px',
                  color: labelColor,
                },
              }}
              control={
                <Radio
                  sx={{
                    width: '14px',
                    height: '14px',
                    color: 'transparent',
                    backgroundColor: radioColor.static,
                    '&.Mui-checked': {
                      color: radioColor.static,
                      backgroundColor: radioColor.onChecked,
                    },
                  }}
                  disableRipple
                />
              }
              label={label}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default RadioFilters;
