

const AutoCopyright = ({year}) => {
            var dateObject = new Date(); // get this year as 4-digit value
            var thisYear = dateObject.getFullYear();
            
          
            if (year === thisYear || year > thisYear) { // $year cannot be greater than this year - if it is then echo only current year
                return "Copyright \u00A9 Imagine More Design " + thisYear; // display single year
            } else {
                return "Copyright \u00A9 Imagine More Design " + year + " - " + thisYear; // display range of years
            }


}
       
export default AutoCopyright