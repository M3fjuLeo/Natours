import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51RsnOIPDHTG1Jxdlvc7Fll5OC2oxFAx2kAKzz1EwJOBo4Ts6EYTQFCO63A0DkWWijdfmvtRlXuVrbw4wVlZkN9Xi00JU39cjui'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
