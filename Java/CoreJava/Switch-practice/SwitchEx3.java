import java.util.Scanner;
public class SwitchEx3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the day: ");
        String day = sc.nextLine();
        //String day = "Monday";
        switch(day){
            case "Monday"->System.out.println("Today is Monday");
            case "Tuesday"->System.out.println("Today is Tuesday");
            case "Wednesday"->System.out.println("Today is Wednesday");
            case "Thursday"->System.out.println("Today is Thursday");
            case "Friday"->System.out.println("Today is Friday");
            case "Saturday"->System.out.println("Today is Saturday");
            case "Sunday"->System.out.println("Today is Sunday");
            default -> System.out.println("Invalid day");
        }
        sc.close();
    }
}

// Output:
// Today is Monday
