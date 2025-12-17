# ماڈیول 1: روبوٹک اعصابی نظام (ROS 2)

## تعارف

روبوٹ آپریٹنگ سسٹم 2 (ROS 2) محض ایک آپریٹنگ سسٹم نہیں ہے؛ یہ ایک میٹا-آپریٹنگ سسٹم ہے—ایک لچکدار فریم ورک جو اوزار، لائبریریاں، اور روایات پر مشتمل ہے جو خاص طور پر پیچیدہ روبوٹک ایپلیکیشنز کی ترقی کے لئے ڈیزائن کیا گیا ہے۔ اپنے پیشرو کی بنیادی کامیابی پر تعمیر کرتے ہوئے، ROS 2 کو جدید روبوٹکس کی مطالباتی ضروریات کو پورا کرنے کے لئے تیار کیا گیا تھا، جن میں حقیقی وقت کا کنٹرول، کثیر روبوٹ سسٹمز، ایمبیڈڈ پلیٹ فارمز، اور صنعتی ایپلیکیشنز شامل ہیں۔ اس کی تقسیم شدہ آرکیٹیکچر مختلف ہارڈویئر پلیٹ فارمز پر ماڈیولر، اسکیل ایبل، اور مضبوط روبوٹ رویوں کو آسان بناتی ہے۔ یہ ماڈیول ROS 2 کے بنیادی تصورات پر روشنی ڈالتا ہے، اس کی آرکیٹیکچرل بنیادوں، مواصلاتی پیراڈائمز، اور انسان نما روبوٹکس کی ترقی کے لئے اہم اوزار پر زور دیتا ہے۔

## ROS 2 آرکیٹیکچر: Nodes, Topics, Services, Actions, اور DDS

ROS 2 کی تقسیم شدہ نوعیت اس کا سب سے بڑا فائدہ ہے، جو روبوٹک سسٹم کے اجزاء کو آزادانہ طور پر کام کرنے کی اجازت دیتی ہے جبکہ بغیر کسی رکاوٹ کے بات چیت کرتی ہے۔ یہ کئی بنیادی تصورات کے ذریعے حاصل کیا جاتا ہے:

### Nodes

Nodes ROS 2 کے بنیادی حسابی یونٹ ہیں۔ ہر Node ایک قابل عمل عمل ہے جو ایک مخصوص کام کے لئے ذمہ دار ہے۔ ایک روبوٹ کی فعالیت کو متعدد، باہمی جڑے ہوئے Nodes میں تقسیم کرکے، ڈویلپرز پیچیدگی کو منظم کر سکتے ہیں، متوازی ترقی کی سہولت فراہم کر سکتے ہیں، اور سسٹم کی خرابی کی برداشت کو بڑھا سکتے ہیں۔ ایک انسان نما روبوٹ کے لئے، Nodes میں شامل ہو سکتے ہیں:
-   **Perception Nodes:** کیمروں، LiDAR، اور گہرائی کے سینسرز سے ڈیٹا کے حصول کو ہینڈل کرتے ہیں، جیسے کہ آبجیکٹ کی شناخت، چہرے کی شناخت، یا منظر کی تقسیم۔
-   **Control Nodes:** جوائنٹ ایکچویشن، توازن کنٹرول، اور حرکت کی منصوبہ بندی کا انتظام کرتے ہیں، اعلی سطحی کمانڈز کو موٹر سگنلز میں تبدیل کرتے ہیں۔
-   **Navigation Nodes:** سینسر ڈیٹا کو پروسیس کرتے ہیں تاکہ نقشے بنائیں، ان نقشوں میں روبوٹ کو مقامی بنائیں، اور ٹکراؤ سے پاک راستے کی منصوبہ بندی کریں۔
-   **Human-Robot Interaction Nodes:** آواز کے کمانڈز کی تشریح کرتے ہیں (speech-to-text کا استعمال کرتے ہوئے)، مصنوعی تقریر پیدا کرتے ہیں (text-to-speech)، یا انسانی اشاروں کو پہچانتے ہیں۔

### Topics

Topics ایک پبلش-سبسکرائب مواصلاتی ماڈل کو نافذ کرتے ہیں، جو غیر ہم وقت ساز ڈیٹا اسٹریمز کے طور پر کام کرتے ہیں جہاں Nodes ایک دوسرے کے وجود کے براہ راست علم کے بغیر پیغامات کا تبادلہ کر سکتے ہیں۔ یہ غیر مربوط مواصلات ماڈیولریٹی کو فروغ دیتے ہیں۔ پبلشرز ایک نامزد Topic پر پیغامات بھیجتے ہیں، جبکہ سبسکرائبرز اس Topic پر شائع ہونے والے تمام پیغامات وصول کرتے ہیں۔
-   **Humanoid Robotics میں مثال:** ایک کیمرہ Node اعلی تعدد کی تصویر کا ڈیٹا ایک Topic جیسے `/perception/camera/image_raw` پر شائع کر سکتا ہے۔ ایک بصری پروسیسنگ Node اس Topic کو سبسکرائب کرتا ہے، تصاویر کو پروسیس کرتا ہے تاکہ رکاوٹوں کا پتہ لگایا جا سکے، اور پھر رکاوٹ کی معلومات کو `/navigation/obstacles` پر شائع کرتا ہے۔ دریں اثناء، ایک بیس کنٹرول Node اوڈومیٹری ڈیٹا کو `/odom` پر شائع کر سکتا ہے، اور دیگر Nodes، جیسے کہ ایک لوکلائزیشن Node، اس کو سبسکرائب کرتے ہیں۔

### Services

Services ایک ہم وقت ساز، درخواست-جواب مواصلاتی طریقہ کار فراہم کرتے ہیں جو ان آپریشنز کے لئے مثالی ہیں جنہیں فوری جواب کی ضرورت ہوتی ہے۔ ایک کلائنٹ Node ایک سروس فراہم کرنے والے Node کو درخواست بھیجتا ہے اور جب تک جواب موصول نہیں ہوتا، بلاک رہتا ہے۔
-   **Humanoid Robotics میں مثال:** ایک کلائنٹ Node (مثلاً، ایک اعلی سطحی ٹاسک پلانر) ایک "gripper control" سروس Node سے `/manipulation/grasp_object` سروس کے ذریعے ایک مخصوص ہیرا پھیری کی کارروائی کی درخواست کر سکتا ہے۔ gripper control Node کمانڈ کو انجام دیتا ہے (مثلاً، gripper کو بند کرتا ہے)، اور مکمل ہونے پر، کامیابی/ناکامی کی حیثیت واپس بھیجتا ہے۔ یہ یقینی بناتا ہے کہ پلانر کو کارروائی کے نتیجے کا علم ہوتا ہے اس سے پہلے کہ وہ آگے بڑھے۔

### Actions

Actions طویل مدتی، مقصد پر مبنی کاموں کے لئے ڈیزائن کیے گئے ہیں جو وقتاً فوقتاً فیڈ بیک کی ضرورت ہوتی ہے اور انہیں روکا جا سکتا ہے۔ وہ سروس کے تصور کو بڑھاتے ہیں، کلائنٹس کو ایک مقصد بھیجنے، مقصد کی پیشرفت پر مسلسل فیڈ بیک حاصل کرنے، اور بالآخر ایک نتیجہ حاصل کرنے کی اجازت دیتے ہیں۔ Actions انسان نما روبوٹس میں عام پیچیدہ، کثیر مرحلہ رویوں کے لئے اہم ہیں۔
-   **Humanoid Robotics میں مثال:** ایک "navigate to goal" Action ایک اعلی سطحی کمانڈ کے ذریعے شروع کی جا سکتی ہے۔ نیویگیشن Action سرور مسلسل فیڈ بیک بھیجتا ہے (مثلاً، موجودہ مقام، آمد کے لئے متوقع وقت) جبکہ روبوٹ حرکت کر رہا ہوتا ہے۔ اگر ماحول غیر متوقع طور پر بدل جاتا ہے، یا کوئی اعلی ترجیحی کام ابھرتا ہے، تو نیویگیشن Action کو روکا جا سکتا ہے۔

### Data Distribution Service (DDS)

ROS 2 کے مواصلات کے دل میں Data Distribution Service (DDS) ہے، جو حقیقی وقت کے سسٹمز کے لئے ایک کھلا معیار ہے۔ DDS دریافت، سیریلائزیشن، ٹرانسپورٹ، اور Nodes کے درمیان پیغامات کی ترسیل کو ہینڈل کرتا ہے، جو اہم Quality of Service (QoS) پالیسیز فراہم کرتا ہے۔ ROS 1 کے کسٹم TCP/IP پر مبنی مواصلات کے برعکس، DDS پیش کرتا ہے:
-   **Decentralization:** کوئی مرکزی ماسٹر نہیں، مضبوطی اور اسکیل ایبلٹی کو بہتر بناتا ہے۔
-   **Quality of Service (QoS):** قابل ترتیب پالیسیز برائے اعتبار، پائیداری، تاریخ، اور ڈیڈ لائن، جو ڈویلپرز کو مخصوص حقیقی وقت کی ضروریات کے لئے مواصلات کو بہتر بنانے کی اجازت دیتی ہیں۔
-   **Real-time Performance:** کم تاخیر، اعلی تھروپٹ ڈیٹا ایکسچینج کے لئے بہتر بنایا گیا۔

### Quality of Service (QoS) پالیسیز

QoS پالیسیز ROS 2 میں ڈویلپرز کو مواصلاتی چینلز کے مطلوبہ رویے کی وضاحت کرنے کی اجازت دیتی ہیں، یہ یقینی بناتے ہوئے کہ پیغامات کو قابل اعتماد اور مؤثر طریقے سے ایپلیکیشن کی ضروریات کے مطابق پہنچایا جائے۔ کلیدی QoS پالیسیز میں شامل ہیں:
-   **Reliability:** پیغام کی ترسیل کی ضمانت دیتا ہے (ممکنہ تاخیر کی قیمت پر) یا تیز ترسیل کے لئے پیغامات کو چھوڑنے کی اجازت دیتا ہے (بہترین کوشش)۔
-   **Durability:** طے کرتا ہے کہ آیا دیر سے شامل ہونے والے سبسکرائبرز کو پہلے شائع شدہ پیغامات موصول ہوتے ہیں۔
-   **History:** وضاحت کرتا ہے کہ ایک پبلشر کو نئے سبسکرائبرز کے لئے کتنے پیغامات (یا کتنا ڈیٹا) برقرار رکھنا چاہئے۔
-   **Deadline:** پیغام کی اشاعتوں کے درمیان زیادہ سے زیادہ متوقع وقت کو نافذ کرتا ہے؛ حقیقی وقت کے ڈیٹا اسٹریمز کی نگرانی کے لئے مفید۔

## ROS 2 Python Nodes کے ساتھ `rclpy`

`rclpy` ROS 2 کے لئے Python کلائنٹ لائبریری ہے، جو Python کا استعمال کرتے ہوئے ROS 2 Nodes کی ترقی کے لئے ایک بدیہی اور طاقتور انٹرفیس فراہم کرتی ہے۔

### مکمل پبلشر/سبسکرائبر کلاس ڈھانچہ (Python)

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

# --- Publisher Node ---
class SimplePublisher(Node):
    def __init__(self):
        # Initialize the Node with a unique name
        super().__init__('simple_publisher_node')
        # Create a publisher to the 'chatter' topic, publishing String messages
        # The queue size (10) specifies how many messages to buffer if subscribers are slow
        self.publisher_ = self.create_publisher(String, 'chatter', 10)
        self.timer_period = 0.5  # seconds between messages
        self.timer = self.create_timer(self.timer_period, self.timer_callback)
        self.i = 0 # Counter for messages

    def timer_callback(self):
        # Create a String message
        msg = String()
        msg.data = f'Hello from ROS 2 Publisher: {self.i}'
        # Publish the message
        self.publisher_.publish(msg)
        # Log the published message
        self.get_logger().info(f'Published: "{msg.data}"')
        self.i += 1

# --- Subscriber Node ---
class SimpleSubscriber(Node):
    def __init__(self):
        # Initialize the Node with a unique name
        super().__init__('simple_subscriber_node')
        # Create a subscriber to the 'chatter' topic, expecting String messages
        # When a message is received, call the 'listener_callback' method
        self.subscription = self.create_subscription(
            String,
            'chatter',
            self.listener_callback,
            10)
        # Prevent unused variable warning
        self.subscription

    def listener_callback(self, msg):
        # Log the received message
        self.get_logger().info(f'Received: "{msg.data}"')

def main(args=None):
    # Initialize the ROS 2 client library
    rclpy.init(args=args)

    # Create instances of the publisher and subscriber nodes
    publisher_node = SimplePublisher()
    subscriber_node = SimpleSubscriber()

    # Create an executor to manage the execution of nodes
    # A MultiThreadedExecutor can process multiple callbacks concurrently
    executor = rclpy.executors.MultiThreadedExecutor()
    executor.add_node(publisher_node)
    executor.add_node(subscriber_node)

    try:
        # Spin the executor to start processing callbacks
        executor.spin()
    except KeyboardInterrupt:
        pass
    finally:
        # Shutdown nodes and executor cleanly
        publisher_node.destroy_node()
        subscriber_node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

اس مثال کو چلانے کے لئے، اسے `simple_talker_listener.py` کے طور پر محفوظ کریں۔ پھر، اپنے ROS 2 ورک اسپیس سے (اپنی سیٹ اپ فائل کو سورس کرنے کے بعد)، آپ اسے چلائیں گے:
`python3 simple_talker_listener.py`

## لانچ فائلز اور پیرامیٹرز

ROS 2 `launch` سسٹم متعدد Nodes کو بیک وقت شروع کرنے اور ترتیب دینے کے لئے استعمال ہوتا ہے، پیرامیٹرز، remappings، اور کمپوزیشنز کو منظم کرتا ہے۔ یہ پیچیدہ روبوٹک سسٹمز کو منظم کرنے کے لئے ضروری ہے۔

### `launch.py` کنفیگریشن

ROS 2 میں لانچ فائلز Python میں لکھی جاتی ہیں، جو لانچ کے عمل پر طاقتور پروگراماتی کنٹرول فراہم کرتی ہیں۔

*مثال `my_robot_launch.py`:*
```python
from launch import LaunchDescription
from launch_ros.actions import Node
from launch.substitutions import LaunchConfiguration
from launch.actions import DeclareLaunchArgument

def generate_launch_description():
    # Declare a launch argument for the robot's namespace
    robot_namespace_arg = DeclareLaunchArgument(
        'robot_namespace',
        default_value='humanoid_robot',
        description='Namespace for the robot nodes'
    )

    # Node for controlling the robot's base
    base_controller_node = Node(
        package='my_robot_controller',
        executable='base_controller',
        namespace=LaunchConfiguration('robot_namespace'),
        name='base_controller',
        parameters=[
            {'linear_speed': 0.5},
            {'angular_speed': 0.8}
        ],
        output='screen'
    )

    # Node for processing camera data
    camera_processor_node = Node(
        package='my_vision_package',
        executable='camera_processor',
        namespace=LaunchConfiguration('robot_namespace'),
        name='camera_processor',
        remappings=[
            ('/image_raw', '/robot_sensors/camera/image_raw'),
            ('/detected_objects', '/robot_perception/objects')
        ],
        output='screen'
    )

    # Node for a simple LiDAR sensor
    lidar_sensor_node = Node(
        package='my_sensors_package',
        executable='lidar_sensor',
        namespace=LaunchConfiguration('robot_namespace'),
        name='lidar_sensor',
        parameters=[
            {'frame_id': 'lidar_link'},
            {'scan_topic': '/robot_sensors/lidar/scan'}
        ],
        output='screen'
    )

    return LaunchDescription([
        robot_namespace_arg,
        base_controller_node,
        camera_processor_node,
        lidar_sensor_node
    ])
```
اس لانچ فائل کو چلانے کے لئے، آپ استعمال کریں گے: `ros2 launch my_robot_package my_robot_launch.py`

### پیرامیٹرز

ROS 2 میں پیرامیٹرز Nodes کی رن ٹائم پر متحرک ترتیب کی اجازت دیتے ہیں۔ انہیں براہ راست لانچ فائلز میں یا `ros2 param` کمانڈ لائن ٹول کے ذریعے سیٹ کیا جا سکتا ہے۔ یہ لچکدار ترتیب کے بغیر کوڈ کو دوبارہ مرتب کیے بغیر روبوٹ کے رویے کو آسانی سے بہتر بنانے کی اجازت دیتی ہے۔

## URDF اور حرکیات

یونائیٹڈ روبوٹ ڈسکرپشن فارمیٹ (URDF) ایک XML فارمیٹ ہے جو روبوٹ کے تمام عناصر کی وضاحت کے لئے استعمال ہوتا ہے، بشمول اس کی جسمانی خصوصیات، بصری شکل، اور حرکیاتی ڈھانچہ۔ انسان نما روبوٹس کے لئے، ایک تفصیلی URDF ماڈل درست سمولیشن، حرکت کی منصوبہ بندی، اور بصریات کے لئے لازمی ہے۔

### Links

ایک `<link>` عنصر روبوٹ کے ایک سخت جسمانی حصے کی وضاحت کرتا ہے۔ ہر link کے ساتھ جغرافیائی (بصری اور تصادم ماڈلز) اور جڑتی خصوصیات (وزن، جڑتی میٹرکس) وابستہ ہوتی ہیں۔
-   **مثال:** ایک انسان نما کے لئے، links میں دھڑ، سر، اوپری بازو، کلائیاں، ہاتھ، اوپری ٹانگیں، نچلی ٹانگیں، اور پاؤں شامل ہو سکتے ہیں۔

### Joints

ایک `<joint>` عنصر دو links کے درمیان تعلق کی حرکیاتی اور حرکی خصوصیات کی وضاحت کرتا ہے۔ Joints یہ وضاحت کرتے ہیں کہ links ایک دوسرے کے نسبت کیسے حرکت کرتے ہیں۔
-   **اقسام:** Revolute (ایک محور کے گرد گھومنا)، Prismatic (ایک محور کے ساتھ سلائیڈ کرنا)، Fixed (سخت کنکشن)، Continuous (revolute بغیر کسی حد کے)۔
-   **مثال:** ایک `revolute` joint اوپری بازو کو کندھے سے جوڑ سکتا ہے، جو گھومنے کی اجازت دیتا ہے۔ ایک `fixed` joint ایک کیمرے کو سر link سے جوڑ سکتا ہے۔

### TF2 ٹرانسفارم ٹری

TF2 ایک ROS 2 پیکج ہے جو وقت کے ساتھ ساتھ کوآرڈینیٹ فریمز کے درمیان تعلقات کو ٹریک کرتا ہے۔ روبوٹکس میں، خاص طور پر پیچیدہ انسان نما میں، بہت سے مختلف کوآرڈینیٹ فریمز موجود ہوتے ہیں (مثلاً، world frame, base link frame, camera frame, end-effector frame)۔ TF2 آپ کو اجازت دیتا ہے:
-   **ٹرانسفارمز کی نمائندگی کریں:** ہر فریم کی 3D پوزیشن اور اورینٹیشن (ٹرانسفارم) کو اس کے والدین کے نسبت اسٹور کریں۔
-   **ٹرانسفارمز کو کوئری کریں:** کسی بھی دو فریمز کے درمیان کسی بھی وقت پر ٹرانسفارم کے لئے پوچھیں۔
-   **ٹرانسفارمز کو براڈکاسٹ کریں:** Nodes وہ ٹرانسفارمز شائع کرتے ہیں جو وہ جانتے ہیں (مثلاً، base_link سے odom تک)۔

انسان نما روبوٹس کے لئے، TF2 اہم ہے:
-   **سینسر فیوژن:** مختلف فریمز میں بیان کردہ سینسرز سے ڈیٹا کو یکجا کرنا۔
-   **حرکت کی منصوبہ بندی:** مطلوبہ end-effector poses کو joint کمانڈز میں تبدیل کرنا۔
-   **ادراک:** دریافت شدہ اشیاء کو روبوٹ کے base frame یا world frame میں مقام دینا۔

URDF اور TF2 کو سمجھ کر اور مؤثر طریقے سے استعمال کرکے، ڈویلپرز انسان نما روبوٹس کی پیچیدہ حرکیات اور حرکیات کو درست طریقے سے ماڈل، سمولیشن، اور کنٹرول کر سکتے ہیں، جو اعلی درجے کے رویوں اور تعاملات کی بنیاد بناتے ہیں۔