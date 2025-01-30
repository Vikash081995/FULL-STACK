// Logical operators in Java

public class Logical {

    public static void main(String[] args) {
        // && and operator
        // || or operator
        // ! NOT operator

        double temp = 20;
        boolean sunny = true;

        if (temp <= 30 && temp >= 0 && sunny) {
            System.out.println("It is a good day");
        } else if (temp <= 30 && temp >= 0 && !sunny) {
            System.out.println("It is a bad day");
        } else if (temp > 30 || temp < 0) {
            System.out.println("It is a very bad day");
        }

    }
}
