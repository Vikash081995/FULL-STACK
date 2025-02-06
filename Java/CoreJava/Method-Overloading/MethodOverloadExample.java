public class MethodOverloadExample {

    public static void main(String[] args) {
        // Method Overloading - methods that share the same name but different parameters
        double twoParamCalculation = add(10.0, 20.0);
        double threeParamCalculation = add(10.0, 20.0, 30.0);
        System.out.println(twoParamCalculation);
        System.out.println(threeParamCalculation);
    }

    static double add(double a, double b) {
        return a + b;
    }

    static double add(double a, double b, double c) {
        return a + b + c;
    }
}
