import { useEffect } from "react";
import EventsService from "../Services/EventsService";

const EventsPage = ()=> {


    const fetchEvents = async () => {
        try {
            const events = await EventsService.getAll();
            console.log(events);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect (() => {
        fetchEvents();
      }, [])


    
    return <>
    <h1>Page des evenements</h1>
    </>;
    
}
    export default EventsPage;