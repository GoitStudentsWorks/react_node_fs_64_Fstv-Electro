import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { useState, useEffect } from "react";

export const Calendar = ({parentState}) => {
    dayjs().format();

    const [dateDeadline, setDateDeadline] = useState('');

    useEffect(() => {
        console.log(dateDeadline);
        
    },[dateDeadline])

    return <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            views={['month', 'day']} 
            value={dateDeadline}
            onChange={(newValue) => {setDateDeadline(newValue); parentState(newValue)}}
            slots={{
              
                openPickerIcon: ()=>(<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="chevron-down">
                <path id="Vector" d="M4.5 7.25L9 11.75L13.5 7.25" stroke="#BEDBB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>),
              }}
              dayOfWeekFormatter={(day)=>day.slice(0,2)}
              slotProps={{
                desktopPaper: {
                    sx: {
                      borderRadius: '8px',
                      color: '#fff',
                      backgroundColor: '#1F1F1F',
                      '& .MuiPickersCalendarHeader-labelContainer': {
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      },
                      '& .MuiSvgIcon-root': {
                        fill: '#fff',
                      },
                      '& .MuiTypography-root': {
                        color: '#FFFFFF80',
                        height: '24px',
                        marginTop:'14px'
                      },
                      '& .MuiButtonBase-root': {
                        color: '#fff',
                        margin: 0,
                        padding: 0,
                      },
                      '& .MuiPickersArrowSwitcher-root': {
                        width: '100%',
                        justifyContent: 'space-between',
                      },
                      '& .MuiPickersCalendarHeader-switchViewButton': {
                        display: 'none',
                      },
                      '& .MuiPickersCalendarHeader-root': {
                        padding: '0',
                        alignItems: 'baseline',
                       margin: '0',
                       borderBottomWidth: '2px',
                       borderBottomStyle: 'solid',
                       borderColor: '#FFFFFF33',
                      },

                      '& .MuiPickersArrowSwitcher-button': {
                        height: '21px',
                      },
                      
                      '& .MuiDateCalendar-root': {
                        width: '233px',
                        height: '254px',
                        padding: '18px',
                        boxSizing: 'border-box',
                      },

                      '& .MuiPickersDay-hiddenDaySpacingFiller':{
                        height: '24px',
                        width: '24px',
                        minWidth: '24px',
                        maxWidth: '24px',
                      },
                      '& .MuiPickersSlideTransition-root': {
                        minHeight: '140px'
                      }
                    }
                  },
                day: {
                    sx: {
                      height: '24px',
                        width: '24px',
                        minWidth: '24px',
                        maxWidth: '24px',
                        fontSize: '14px',
                        '&.Mui-selected': {
                            backgroundColor: '#BEDBB0',
                            color: '#1F1F1F'
                          }, 
                      
                      '&.Mui-selected:hover': {
                        backgroundColor: '#BEDBB0',
                      },
                      '&.MuiPickersDay-today': {
                        borderWidth: 1,
                        borderColor: '#BEDBB0',
                        color: '#ffffff'
                      }
                    }
                  },
                textField: {
                  variant: 'outlined',
                  sx: {
                    "& input": {display: 'none'},
                    "& fieldset": { border: 'none' },
                  },
                }
              }}
        />
    </LocalizationProvider>
    </>
};