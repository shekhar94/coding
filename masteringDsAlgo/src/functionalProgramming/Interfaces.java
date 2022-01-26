package functionalProgramming;

import java.util.Comparator;

public class Interfaces {
    public static void main(String[] args) {
        Employee mike = new Employee("Mike", 2000),
                louise = new Employee("Louise", 2500);

        Comparator<Employee> byName = new Comparator<Employee>() {
            @Override public int compare(Employee employee, Employee t1) {
                return employee.getName().compareTo(t1.getName());
            }
        };

        System.out.println("By name:");
        System.out.println(byName.compare(mike, louise));
        try {
            System.out.println(byName.compare(mike, null));
        } catch (NullPointerException e) {
            System.out.println(e);
        }

        Comparator<Employee> byNameThenNull = Comparator.nullsLast(byName);

        System.out.println("Then null:");
        System.out.println(byNameThenNull.compare(mike, louise));
        System.out.println(byNameThenNull.compare(mike, null));

        Comparator<Employee>  nullThenByDecreasingName = byNameThenNull.reversed();
        System.out.println("Reversed:");
        System.out.println(nullThenByDecreasingName.compare(mike, louise));
        System.out.println(nullThenByDecreasingName.compare(mike, null));

    }
}
