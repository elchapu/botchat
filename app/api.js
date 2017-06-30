import axios from 'axios'

export default async data => {
  return {
    type: 'template',
    payload: {
      template_type: 'airline_itinerary',
      intro_message: 'Aquí tiene el itinerario de vuelo',
      locale: 'es_LA',
      pnr_number: 'A Confirmar',
      theme_color: '#EB212E',
      total_price: 15000,
      currency: 'ARS',
      passenger_info: [{
        name: 'A confirmar',
        passenger_id: 'p001'
      }],
      passenger_segment_info: [{
        segment_id: 's001',
        passenger_id: 'p001',
        seat: 'A confirmar',
        seat_type: 'Economy'
      }],
      flight_info: [{
        connection_id: 'c001',
        segment_id: 's001',
        flight_number: '1234',
        aircraft_type: 'AV',
        departure_airport: { airport_code: 'EZE', city: 'BUE' },
        arrival_airport: { airport_code: 'MCO', city: 'MIA' },
        flight_schedule: { departure_time: '2017-10-10T10:00:00', arrival_time: '2017-10-11T10:00:00' },
        travel_class: 'economy'
      }]
    }
  }
}
