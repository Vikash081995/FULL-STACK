import CoreJava.Calc;
import CoreJava.AdvancedCal;
import java.util.*;

public class Hello {
    public static void main(String[] args) {
        Calc cal = new Calc();
        System.out.println(cal.add(2, 3));
        System.out.println(cal.sub(2, 3));

        AdvancedCal adv = new AdvancedCal();
        System.out.println(adv.mul(2, 3));
        System.out.println(adv.div(2, 3));
        System.out.println(adv.add(2, 3));

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);
    }
}