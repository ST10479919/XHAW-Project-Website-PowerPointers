package za.co.varsitycollege.st10479919.powerpointers_xhaw


// *** --- Authors  --- *** //
//     --- Moe      ---     //
//     --- Petrus    ---    //
//     --- Kgomotso ---     //
// *** ------------------ *** //

import android.media.Image
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // Initialize views
        val logoImage = findViewById<ImageView>(R.id.logoImage);
        val sixMonthCoursesButton = findViewById<Button>(R.id.sixMonthCoursesButton);
        val sixWeekCoursesButton = findViewById<Button>(R.id.sixWeekCoursesButton);
        val exitButton = findViewById<Button>(R.id.exitButton);

        logoImage.setOnClickListener {
            // Should go to about-us
        }

        // Set click listeners for buttons
        sixMonthCoursesButton.setOnClickListener {
            // Handle six-month courses button click
        }
        sixWeekCoursesButton.setOnClickListener {
            // Handle six-weeks courses button click
        }

        exitButton.setOnClickListener {
            // Handle exit button click
            finish();
        }

    }
}