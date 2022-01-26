package multithreading;
import java.lang.Thread;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Vault {
    public static final int MAX_PASSWORD = 9999;
    public static void main(String[] args) {
        Random random = new Random();
        VaultStore vaultStore = new VaultStore(random.nextInt(MAX_PASSWORD));

        List<Thread> threads = new ArrayList<>();
        threads.add(new AscendingHackerThread(vaultStore));
        threads.add(new DescendingHackerThread(vaultStore));
        threads.add(new PoliceThread());

        for (Thread thread: threads) {
            thread.start();
        }

    }

    private static class VaultStore {
        private int password;
        public VaultStore(int password) {
            this.password = password;
        }

        public boolean isCorrectPassword(int guess) {
            try {
                Thread.sleep(5);
            } catch (InterruptedException e) {
            }
            return this.password == guess;
        }
    }

    private static abstract class HackerThread extends Thread {
        protected VaultStore vaultStore;

        public HackerThread(VaultStore vaultStore) {
            this.vaultStore = vaultStore;
            this.setName(this.getClass().getSimpleName());
            this.setPriority(Thread.MAX_PRIORITY);
        }

        @Override
        public void start() {
            System.out.println("Starting thread " + this.getName());
            super.start();
        }
    }
    private static class AscendingHackerThread extends HackerThread {
        public AscendingHackerThread(VaultStore vaultStore) {
            super(vaultStore);
        }

        @Override
        public void run() {
            for (int guess = 0; guess < MAX_PASSWORD; guess++) {
                if (vaultStore.isCorrectPassword(guess)) {
                    System.out.println(this.getName() + " guessed the password " + guess);
                    System.exit(0);
                }
            }
        }
    }

    private static class DescendingHackerThread extends HackerThread {
        public DescendingHackerThread(VaultStore vaultStore) {
            super(vaultStore);
        }

        @Override
        public void run() {
            for (int guess = MAX_PASSWORD; guess >= 0; guess--) {
                if (vaultStore.isCorrectPassword(guess)) {
                    System.out.println(this.getName() + " guessed the password" + guess);
                    System.exit(0);
                }
            }
        }
    }

    private static class PoliceThread extends Thread {
        @Override
        public void run() {
            for (int i = 10; i > 0; i--) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {

                }
                System.out.println(i);
            }
            System.out.println("Game over for you hackers");
            System.exit(0);
        }

    }

}
