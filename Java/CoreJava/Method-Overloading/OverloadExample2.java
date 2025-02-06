public class OverloadExample2 {
    public static void main(String[] args) {
        String pizza = bakePizza("wheat");
        System.out.println(pizza);
        String pizza2 = bakePizza("wheat", "tomato");
        System.out.println(pizza2);
    }

    static String bakePizza(String bread) {
        return bread + " pizza";
    }

    static String bakePizza(String bread, String sauce) {
        return bread + " pizza with " + sauce;
    }
}