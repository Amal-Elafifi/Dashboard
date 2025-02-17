import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { tokens } from './../../themes';
import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';
import { Header } from '../team';



const Calender= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  // handle click in cell to create event
  function handleDateClick (selected) {
    const title = prompt("Enter Title For Your Event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if(title){
      calendarApi.addEvent ({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  // handle click on event cell to delete event
  function handleEventClick (selected) {
    if(window.confirm("Are you sure you want to delete this Event?")){
      selected.event.remove();
    }
  }

  return(
    <Box sx={{margin: "20px"}}>
      <Header title="Calender" subtitle="Full Calendar Interactive Page"/>
      <Box sx={{
        display: "flex",
         justifyContent: "space-between"
      }}>
        {/* left calender sidebar */}
        <Box sx={{
          flex: "1 1 20%",
          p: "15px",
          backgroundColor: colors.primary[400],
          borderRadius: "4px"
        }}>
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map(event => (
              <ListItem 
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px"  
                }}
              >
                <ListItemText 
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* right calendar cells */}
        <Box sx={{flex: "1 1 100%", marginLeft: "15px"}}>
          <FullCalendar
            height= "75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin ,
              listPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev today next",
              center: "title",
              right: " dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {id: "1234", title: "All-day Event", date: "2025-02-16"},
              {id: "567", title: "Timed Event", date: "2025-02-18"}  
            ]}
          />
        </Box>
      </Box>
    </Box>
  )

}



export default Calender;