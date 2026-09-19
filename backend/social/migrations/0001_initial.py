from django.db import migrations, models
import django.db.models.deletion

class Migration(migrations.Migration):
    initial = True
    dependencies = [("auth", "0012_alter_user_first_name_max_length")]
    operations = [
        migrations.CreateModel(name="Profile", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("bio", models.TextField(blank=True)), ("avatar", models.ImageField(blank=True, null=True, upload_to="avatars/")),
            ("user", models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name="profile", to="auth.user")),
        ]),
        migrations.CreateModel(name="Follow", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("created_at", models.DateTimeField(auto_now_add=True)),
            ("follower", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="following", to="auth.user")),
            ("following", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="followers", to="auth.user")),
        ], options={"unique_together": {("follower", "following")}}),
        migrations.CreateModel(name="Post", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("image", models.ImageField(blank=True, null=True, upload_to="posts/")), ("caption", models.TextField(blank=True)),
            ("created_at", models.DateTimeField(auto_now_add=True)),
            ("author", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="posts", to="auth.user")),
            ("likes", models.ManyToManyField(blank=True, related_name="liked_posts", to="auth.user")),
        ]),
        migrations.CreateModel(name="Comment", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("text", models.TextField()), ("created_at", models.DateTimeField(auto_now_add=True)),
            ("author", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="auth.user")),
            ("post", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="comments", to="social.post")),
        ]),
        migrations.CreateModel(name="Story", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("image", models.ImageField(blank=True, null=True, upload_to="stories/")),
            ("caption", models.CharField(blank=True, max_length=240)), ("created_at", models.DateTimeField(auto_now_add=True)),
            ("author", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="auth.user")),
        ]),
        migrations.CreateModel(name="Message", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("text", models.TextField()), ("created_at", models.DateTimeField(auto_now_add=True)),
            ("recipient", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="received_messages", to="auth.user")),
            ("sender", models.ForeignKey(on_delete=django.db.models.CASCADE, related_name="sent_messages", to="auth.user")),
        ]),
        migrations.CreateModel(name="Notification", fields=[
            ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
            ("text", models.CharField(max_length=255)), ("read", models.BooleanField(default=False)),
            ("created_at", models.DateTimeField(auto_now_add=True)),
            ("recipient", models.ForeignKey(on_delete=django.db.models.CASCADE, related_name="notifications", to="auth.user")),
        ]),
    ]
