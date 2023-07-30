import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const RadioColored = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '140px',
      }}
    >
      <RadioGroup
        aria-labelledby="label-changer"
        defaultValue="gray"
        name="radio-buttons-group"
        sx={{ display: 'flex', gap: '8px' }}
        row
      >
        <FormControlLabel
          value="blue"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',

                backgroundColor: 'var(--radio-label-background-color)',
                '&.Mui-checked': {
                  color: 'var(--radio-label-color)',

                  backgroundColor:
                    'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
        />
        <FormControlLabel
          value="pink"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                //
                backgroundColor: 'var(--radio-label-pink-color)',
                '&.Mui-checked': {
                  color: 'var(--radio-label-pink-color)',

                  backgroundColor:
                    'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
        />
        <FormControlLabel
          value="green"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                //
                backgroundColor: 'var(--radio-label-green-color)',

                '&.Mui-checked': {
                  color: 'var(--radio-label-green-color)',

                  backgroundColor:
                    'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
        />
        <FormControlLabel
          value="gray"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',

                backgroundColor: 'var(--radio-label-grey-color)',
                '&.Mui-checked': {
                  // c
                  color: 'var(--radio-label-grey-color)',

                  backgroundColor:
                    'var(--radio-label-checked-background-color)',
                },
              }}
              disableRipple
            />
          }
        />
      </RadioGroup>
    </Box>
  );
};

export default RadioColored;
