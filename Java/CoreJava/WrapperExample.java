public class WrapperExample {
    public static void main(String[] args) {
        // Autoboxing: Automatic conversion of primitive types to their corresponding
        // wrapper classes
        Integer intObject = 10; // int to Integer
        Double doubleObject = 5.5; // double to Double

        // Unboxing: Automatic conversion of wrapper classes to their corresponding
        // primitive types
        int intPrimitive = intObject; // Integer to int
        double doublePrimitive = doubleObject; // Double to double

        // Using wrapper class methods
        String intString = intObject.toString(); // Convert Integer to String
        int parsedInt = Integer.parseInt("123"); // Convert String to int

        // Print statements to display the values
        System.out.println("Integer object: " + intObject);
        System.out.println("Double object: " + doubleObject);
        System.out.println("Primitive int: " + intPrimitive);
        System.out.println("Primitive double: " + doublePrimitive);
        System.out.println("String representation of Integer: " + intString);
        System.out.println("Parsed int from String: " + parsedInt);
    }
}
