# Application Requirements and Landscape

## SRS (Software Requirements Specifications)

### Functional Requirements

#### Local Authentication

We will start with a simple local authentication using email and password, with the following features:

- **Hashed Password**: Passwords will be stored securely using hashing.
- **Email Verification**: Users will need to verify their email addresses.
- **Forget Password**: Users can reset their password if they forget it.
- **Block Users**: Admins can block users if necessary.
  Additionally, the system will be designed to allow future extension from local authentication to OAuth2.

**Note**: কোনো পেইড অথেনটিকেশন সার্ভিসের প্রয়োজন নেই। ইমেইল আর পাসওয়ার্ড দিয়ে লোকাল অথেনটিকেশন করবো এবং ভবিষ্যতে local AUTH to OAuth2 তে এক্সটেন্ড করার সুবিধা রাখা হবে।

#### Multiple Roles (Role Based Access Control)

The application will have five main roles with different permissions:

1. **Admin**
   - Can create and manage everything, including sales data.
2. **Manager**
   - Cannot create anything but can view sales data, inventory, and products.
3. **Chef**
   - Can only view queue orders.
4. **Delivery Man**
   - Can manage queue orders and change their status (e.g., "Out for delivery", "Delivered").
5. **User**
   - Cannot view admin information but can view products, place orders, and leave reviews after successful orders.

**Note**: অ্যাপ্লিকেশনে ৫টা মেইন রোল থাকবে। অ্যাডমিন সবকিছু ম্যানেজ করতে পারবে, ম্যানেজার সেলস ডাটা, ইনভেনটরি, প্রোডাক্ট দেখতে পারবে, শেফ শুধু কিউ অর্ডার দেখতে পারবে, ডেলিভারি ম্যান অর্ডার ম্যানেজ ও স্ট্যাটাস চেইঞ্জ করতে পারবে, আর ইউজার শুধু প্রোডাক্ট চেক, অর্ডার প্লেইস, এবং রিভিউ দিতে পারবে।

#### User Actions

- **Place Orders**: Users will be able to place orders for products of their choice.
- **View and Leave Reviews**: Users can see existing reviews. They can only leave reviews after a successful order.

**Note**: ইউজার অর্ডার প্লেইস করতে পারবে এবং এক্সিস্টিং রিভিউ দেখতে পারবে। অর্ডার দেওয়ার পর রিভিউ দিতে পারবে।

### Future Enhancements

- Extend local authentication to OAuth2 for improved security and ease of use.

---
