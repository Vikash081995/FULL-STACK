public class MethodsExample {
    public static void main(String[] args) {
        double result = square(3);
        System.out.println(result);
        System.out.println(cube(3));

        String fullname = getFullName("Bro", "Code");
        System.out.println(fullname);
    }

    static double square(double x) {
        return x * x;
    }

    static double cube(double x) {
        return x * x * x;
    }

    static String getFullName(String firstName, String lastName) {
        return firstName + " " + lastName;
    }
}