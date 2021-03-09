// eslint-disable-next-line no-unused-vars
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search25: function() {
        return axios.get("https://randomuser.me/api/1.3/?results=25&nat=us");
    }
};
