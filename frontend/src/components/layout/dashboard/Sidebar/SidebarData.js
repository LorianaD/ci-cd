import { calendarIcon, checkCircleIcon, listIcon, logo, tableIcon } from "../../../../assets";

const SidebarData = {
    brand: {
        logo: logo,
    },

    navigation: {
        items: [
            {
                id: "tasks",
                icon: listIcon,
                label: "Mes tâches",
                path: "/dashboard",
            },
            {
                id: "today",
                icon: calendarIcon,
                label: "Aujourd'hui",
                path: "/today",
            },
            {
                id: "board",
                icon: tableIcon,
                label: "Tableau",
                path: "/board",
            },
            {
                id: "completed",
                icon: checkCircleIcon,
                label: "Terminées",
                path: "/completed",
            },
        ]
    },

    projects: {
        title: "Projets",
    }
};

export default SidebarData;