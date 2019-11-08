import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers'
import SwapiService from "../../services/swapi-service";
const swapiService = new SwapiService();

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>

        </ItemDetails>
    )
};

const mapMethodsToProps = () => {
  return {
      getData: swapiService.getPerson,
      getImageUrl: swapiService.getPersonImage
  }
};




export default withSwapiService(PersonDetails, mapMethodsToProps);