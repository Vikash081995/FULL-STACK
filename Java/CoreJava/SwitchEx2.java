import java.util.Scanner;

public class SwitchEx2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the day of the week");
        String day = sc.nextLine();

        switch (day) {
            case "monday", "tuesday", "wednesday", "thursday", "friday" -> System.out.println("Weekday");
            case "saturday", "sunday" -> System.out.println("Weekend");
            default -> System.out.println("Invalid day");
        }
        sc.close();
    }

}
