package CoreJava;
class Vechile {
    String brand = "GEneric vechile";

    Vechile(String brand) {
        this.brand = brand;
    }

    void start() {
        System.out.println("Vechile started");
    }
}

class Car extends Vechile {
    String brand = "Car";

    Car(String parentBrand, String childBrand) {
        super(parentBrand); // calling parent class constructor
        this.brand = childBrand;
    }

    void start() {
        System.out.println("Car started");
    }

    void displayInfo() {
        System.out.println("Child brand is " + this.brand); // calling child class variable
        System.out.println("Parent brand is " + super.brand); // calling parent class variable
        super.start(); // calling parent class method
    }
}

public class SuperExample {
        public static void main(String[] args) {
            Car obj = new Car("Honda", "City");
            obj.displayInfo();
            // output: Child brand is City
            // Parent brand is Honda
            // Vechile started
        }
}
