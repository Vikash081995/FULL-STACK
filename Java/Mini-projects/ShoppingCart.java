import java.util.Scanner;

public class ShoppingCart {

    public static void main(String[] args) {


        //SHOPPING CART
        Scanner scanner = new Scanner(System.in);

        String item;
        double price;
        int quantity;
        char currency = '$';
        double total;
        System.out.println("What item would you like to buy");
        item = scanner.nextLine();

        System.out.println("what is the price of each?:");
        price = scanner.nextDouble();

        System.out.println("How many do you like to have?");
        quantity = scanner.nextInt();

        System.out.println(quantity);
        System.out.println(item);
        System.out.println(price);

        total = price * quantity;
        System.out.println("Your total is " + currency + total);

        scanner.close();
    }
}
