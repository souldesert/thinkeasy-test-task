import SearchIcon from '@mui/icons-material/Search'
import {InputAdornment, styled} from '@mui/material'
import {TextFieldElement, TextFieldElementProps} from 'react-hook-form-mui'

export const SearchField = styled((props: TextFieldElementProps) => (
  <TextFieldElement
    variant="standard"
    slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="inherit" />
          </InputAdornment>
        ),
      },
    }}
    {...props}
  />
))(({theme}) => {
  const white = theme.palette.common.white

  return {
    '& .MuiInputBase-input': {
      color: white,
    },
    '& .MuiInputLabel-root': {
      color: white,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: white,
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: `${white} !important`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: white,
    },
    '& .MuiInputAdornment-root': {
      color: white,
    },
  }
})
