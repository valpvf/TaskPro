import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const RadioFilters = () => {
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
        defaultValue="none"
        name="radio-buttons-group"
        sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
      >
        <FormControlLabel
          value="none"
          sx={{
            display: 'flex',
            gap: '8px',
            margin: '0',
            height: '24px',
            '& .MuiTypography-root': {
              fontFamily: 'Poppins',
              fontSize: '12px',
              letterSpacing: '-0.24px',
              color: 'var(--datepicker-dayname-color)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--radio-label-grey-color)',
                '&.Mui-checked': {
                  color: 'var(--radio-label-grey-color)',
                  backgroundColor: 'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
          label="Without priority"
        />
        <FormControlLabel
          value="low"
          sx={{
            display: 'flex',
            gap: '8px',
            margin: '0',
            height: '24px',
            '& .MuiTypography-root': {
              fontFamily: 'Poppins',
              fontSize: '12px',
              letterSpacing: '-0.24px',
              color: 'var(--datepicker-dayname-color)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--radio-label-background-color)',
                '&.Mui-checked': {
                  color: 'var(--radio-label-background-color)',
                  backgroundColor: 'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
          label="Low"
        />
        <FormControlLabel
          value="medium"
          sx={{
            display: 'flex',
            gap: '8px',
            margin: '0',
            height: '24px',
            '& .MuiTypography-root': {
              fontFamily: 'Poppins',
              fontSize: '12px',
              letterSpacing: '-0.24px',
              color: 'var(--datepicker-dayname-color)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--radio-label-pink-color)',
                '&.Mui-checked': {
                  color: 'var(--radio-label-pink-color)',
                  backgroundColor: 'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
          label="Medium"
        />
        <FormControlLabel
          value="high"
          sx={{
            display: 'flex',
            gap: '8px',
            margin: '0',
            height: '24px',
            '& .MuiTypography-root': {
              fontFamily: 'Poppins',
              fontSize: '12px',
              letterSpacing: '-0.24px',
              color: 'var(--datepicker-dayname-color)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--radio-label-green-color)',
                '&.Mui-checked': {
                  color: 'var(--radio-label-green-color)',
                  backgroundColor: 'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
          label="High"
        />
      </RadioGroup>
    </Box>
  );
};

export default RadioFilters;
