import java.util.Scanner;

public class Example3While {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String response = "";

        while (!response.equals("Q")) {
            System.out.println("You are playing the game! Press Q to quit");
            response = sc.next().toUpperCase();
        }
        sc.close();
    }

}
