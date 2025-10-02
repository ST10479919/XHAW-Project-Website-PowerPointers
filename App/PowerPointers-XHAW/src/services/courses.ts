
export type Course = {
    title: string;
    purpose: string;
    description: string;
    content: string;
    price: number;
}
export type CourseType = "6-Months" | "6-Weeks";

// Data for courses
const coursesData: Record<CourseType, Course[]> = {
    "6-Months": [
        {
            title: "First Aid", 
            purpose: "First aid awareness and basic life support.", 
            description: "This 6-month programme equips learners with essential first aid skills to respond effectively in emergencies. Participants gain practical training in CPR, wound treatment, and emergency scene management, making them prepared to save lives in real situations.", 
            content: "Wounds and bleeding. Burns and fractures. Emergency scene mangement. Cardio-pulmonary resuscitation (CPR). Resiratory emergencies.",
            price: 1500 
        },
        {
            title: "Sewing", 
            purpose: "Alterations and new gatment tailorig services.", 
            description: "The 6-month Sewing course introduces learners to garment design, machine operation, and alterations. Students will master stitching techniques, sewing buttons, zips, hems, and learn how to design and tailor new garments for professional or personal use.", 
            content: "Wounds and bleeding. Burns and fractures. Emergency scene mangement. Cardio-pulmonary resuscitation (CPR). Resiratory emergencies.",
            price: 1500 
        },
        {
            title: "Landscaping", 
            purpose: "Landscaping services for new and established gardens.", 
            description: "This 6-month Landscaping programme covers plant selection, garden layout, and design aesthetics. Learners explore indigenous and exotic plants, fixed structures like fountains or benches, and balancing greenery for both beauty and sustainability.", 
            content: "Wounds and bleeding. Burns and fractures. Emergency scene mangement. Cardio-pulmonary resuscitation (CPR). Resiratory emergencies.",
            price: 1500 
        },
        {
            title: "Life Skills", 
            purpose: "Skills to navigate basic life necessities.", 
            description: "This course prepares learners to navigate key aspects of daily life, from opening a bank account and understanding labour rights to developing basic literacy and numeracy. Ideal for building confidence and independence in the modern world.", 
            content: "Wounds and bleeding. Burns and fractures. Emergency scene mangement. Cardio-pulmonary resuscitation (CPR). Resiratory emergencies.",
            price: 1500 
        },
    ],

    "6-Weeks": [
        {
            title: "Child minding", 
            purpose: "Basic child and baby care.", 
            description: "This short course covers essential childcare skills including feeding, hygiene, and safe play. Learners will gain confidence in looking after children from birth to toddler age.", 
            content: "Birth to 6 month needs. 7 month to 1 year needs. Toddler needs. Educational toys",
            price: 750 
        },
        {
            title: "Cooking", 
            purpose: "Prepare and cook nutritious family meals", 
            description: "This 6-week course teaches nutritious meal preparation, covering proteins, carbohydrates, vegetables, and balanced diets. Students will plan, prepare, and cook meals suitable for families.",
            content: "Nutritional requirements. Proteins, carbohydrates, vegetables. Meal planning. Recipes; preparation and cooking.",
            price: 750
        },
        { 
            title: "Garden maintenance",
            purpose: "Watering, pruning, planting in a domestic garden.",
            description: "This course introduces basic garden upkeep including watering, pruning, and planting techniques. Learners will understand plant needs, propagation methods, and how to maintain a healthy garden. ",
            content: "Water restrictions & plant needs. Pruning & propagation. Planting techniques by type.",
            price: 750
        }

    ]    
};
