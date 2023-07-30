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
              color: 'rgba(255, 255, 255, 0.50)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'rgba(255, 255, 255, 0.30)',
                '&.Mui-checked': {
                  color: 'rgba(255, 255, 255, 0.30)',
                  backgroundColor: '#151512',
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
              color: 'rgba(255, 255, 255, 0.50)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: '#8FA1D0',
                '&.Mui-checked': {
                  color: '#8FA1D0',
                  backgroundColor: '#151512',
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
              color: 'rgba(255, 255, 255, 0.50)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: '#E09CB5',
                '&.Mui-checked': {
                  color: '#E09CB5',
                  backgroundColor: '#151512',
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
              color: 'rgba(255, 255, 255, 0.50)',
            },
          }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: '#BEDBB0',
                '&.Mui-checked': {
                  color: '#BEDBB0',
                  backgroundColor: '#151512',
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
