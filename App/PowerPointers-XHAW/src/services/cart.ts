import { Course, CourseType } from "./courses";

export type CartItem = {
    
    course: Course;
    courseType: CourseType;

}

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}
